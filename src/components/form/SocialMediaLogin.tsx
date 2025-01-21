const socialMethods = [
  '/img/socialMedia/google.png',
  '/img/socialMedia/discord.png',
  '/img/socialMedia/github.png',
];

export default function SocialMediaLogin() {

  return (
    <ul className="social-login-wrap flex justify-center gap-6 py-6 border-y border-[#BDB890] mb-6">
      {socialMethods.map((item, index) => {
        return (
          <li
            key={index}
            className="border rounded-full border-[#BDB890] w-[60px] h-[60px] center cursor-pointer"
          >
            <img src={item} alt="" className="w-[48px] h-[48px]" />
          </li>
        );
      })}
    </ul>
  );
}
