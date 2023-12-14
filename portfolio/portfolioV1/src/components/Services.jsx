import {Card} from "@mui/material"
export default function Services(){
  const servicesmap = [
    {
      service: "Custom Software Development",
      description: "We provide custom software development services from startups to enterprises that helps in solving complex challenges with reliable and agile digital solutions.",
      img: ""
    },
    {
      service: "Website and Web App Development",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "UI & UX Designs",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "Logo Design",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "CMS websites",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "Dedicated Software Developers",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "Maintenance & Management",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },
    {
      service: "Testing & QA Services",
      description: "We develop commercial grade websites & web applications and industry best practices to ensure scalability, security and high performance.",
      img: ""
    },

  ]
    return(
      <>
      <div className="z-[-1] container pt-24 bg-gradient-to-r from-slate-100 to-white to-blue-200 rounded-sm text-center p-3 hero-bg ">
        <h1 className="text-center w-full !font-bold md:!text-4xl"> Elevate Your Business with Innovative Software Solutions</h1>1
        <div className="services grid grid-cols-3 justify-items-center flex-wrap gap-7 ">
          {servicesmap.map((service, ind)=>(
            <Card className="border-2 border-gray max-w-[200px] p-2 rounded  shadow-xl m-3" key={ind}>
              <img src={service.img} />
              <p className="text-lg font-semibold">{service.service}</p>
              <p className="text-xs text-start">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
      </>
    )
}