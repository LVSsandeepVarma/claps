
export default function HeroSection(){
  return(
    <>
    <div className="container  !pt-48 bg-gradient-to-r from-slate-100 to-white to-blue-200 rounded-sm text-center p-3 hero-bg flex justify-around ">
      {/* <img src="../computer.jpg" width={"50%"} height={"50%"}/> */}
      <div className=" flex flex-col justify-around">
        <small className=" text-center uppercase">Form Backend</small>
      <h5 className="text-center !font-bold md:!text-4xl leading-2"> Get emailsformcarry.and messages
from your HTMLformcarry.form</h5>
      <p className="text-center text-xs p-5 !leading-4">Code your own HTML form and style it, then point your form to formcarry to get
email notifications, upload files, block spam and integrate with other apps.

</p>
    </div>
      </div>
    </>
  )
}