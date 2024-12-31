export const onSectionChange = (sec: string) => {
  const section = document.getElementById(sec);
  if (!section) {
    console.log("section not found");
    return;
  }
  section.scrollIntoView({ behavior: "smooth",  inline: "start", });
};
