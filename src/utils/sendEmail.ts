import emailjs from "@emailjs/browser";

const sendEmail = async (formData: any) => {
  const serviceID = "service_l4rst7c";
  const templateID = "template_li5bpp3";
  const publicKey = "3IpCs3mZpZaiD1ma0";
  const templateParams = {
    name: formData.name,
    message: formData.message,
    email: formData.email,
    phone: formData.phone,
    company: formData.company || "-",
  };

  await emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default sendEmail;

