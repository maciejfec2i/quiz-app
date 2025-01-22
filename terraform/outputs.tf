output "ec2_instance_name" {
  description = "Outputs the EC2 instance name (useful for staging instances which have a random integer appended to the name)"
  value       = aws_instance.app_server.tags.Name
}

output "ec2_instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}

output "ec2_instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}
