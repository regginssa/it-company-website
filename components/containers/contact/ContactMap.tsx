const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        title="Charlie Unicorn AI — Kasztanowa Street 17/1, Manowo, Poland"
        src="https://maps.google.com/maps?q=Kasztanowa+Street+17%2F1%2C+76-015+Manowo%2C+Poland&hl=pl&z=16&output=embed"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
