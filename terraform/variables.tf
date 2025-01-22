variable "environment" {
  description = "Environment type to create"
  type        = string
  default     = "staging"
}

locals {
  ec2_instance_name = var.environment == "staging" ? "quiz-app-staging-instance-${random_integer.nine_digit.result}" : "quiz-app-prod-instance"
}

variable "ec2_instance_ami" {
  description = "ID of the AWS EC2 instance AMI"
  type        = string
  default     = "ami-091f18e98bc129c4e"
}

variable "ec2_instance_type" {
  description = "AWS EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "aws_profile" {
  description = "AWS profile to use when running locally"
  type        = string
  default     = ""
}