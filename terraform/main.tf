terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = var.aws_profile != "" ? var.aws_profile : null
  region  = "eu-west-2"
}

resource "aws_security_group" "app_server_sg" {
  name        = "app_server_sg"
  description = "Security group for the app server"

  # Ingress Rules
  ingress {
    description = "Allow HTTP traffic"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow SSH from a specific IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description     = "Allow SSH from a prefix list"
    from_port       = 22
    to_port         = 22
    protocol        = "tcp"
    prefix_list_ids = ["pl-067eefa539e593d55"]
  }

  ingress {
    description = "Allow custom TCP traffic on port 3000"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1" # -1 allows all protocols
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "app_server" {
  ami                         = var.ec2_instance_ami
  instance_type               = var.ec2_instance_type
  key_name                    = "maciej-ec2-access"
  vpc_security_group_ids      = [aws_security_group.app_server_sg.id]
  associate_public_ip_address = true

  user_data = <<-EOF
  #!bin/bash

  sudo apt-get update -y
  sudo apt-get install -y docker.io
  systemctl enable docker
  systemctl start docker
  sudo docker pull ghcr.io/maciejfec2i/quiz-app/quiz-app:latest
  sudo docker run -p 3000:3000 -it -d ghcr.io/maciejfec2i/quiz-app/quiz-app:latest
  EOF

  tags = {
    Name = local.ec2_instance_name
  }
}
