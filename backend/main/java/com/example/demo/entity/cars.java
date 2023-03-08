package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

public class cars {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="Brand")
	private String Brand;
	@Column(name="Type")
	private String Type;
	@Column(name="Mileage")
	private Integer Mileage;
	@Column(name="Colour")
	private String Colour;
	
	public cars(){}
	
	public cars(Integer id,String Brand,String Type,Integer Mileage,String Colour)
	{
		super();
		this.id=id;
		this.Brand=Brand;
		this.Type=Type;
		this.Colour=Colour;
		this.Mileage=Mileage;
	}
	

	public Integer getid()
	{return id;}
	public void setid(Integer id)
	{this.id=id;}
	
	
    public String getBrand()
    {return Brand;}
    public void setBrand( String Brand)
	{this.Brand=Brand;}
    
    
    public String getType()
    {return Type;}
    public void setType(String Type)
    {this.Type=Type;}
    
    
    public  Integer getMileage()
    {return Mileage;} 
    public void setMileage(Integer Mileage)
    {this.Mileage=Mileage;}
    
    
    public String getColour()
    {return Colour;}
    public void setColour(String Colour)
    {this.Colour=Colour;}
}
