
# This block provides config details for Terraform
terraform{
    required_providers {
      azurerm = {
        source = "hashicorp/azurerm"
        version = "~>2.31.1"
      }
    }
}

# Provides config details for Azure terraform provider / I think he means ARM
provider "azurerm" {
  features{}
}

resource "azurerm_resource_group" "rg"{
    name = "azure-resume-rg"
    location = "ukwest"
    tags = {
        environment = "dev"
        source = "Terraform"
    }
}
resource "cosmosdb_account" "name" {
    
}
