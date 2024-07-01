export const scrollIntoView = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    const rect = element?.getBoundingClientRect();
    window.scrollTo({
      top: rect?.top ? rect.top + window.pageYOffset - 42 : 0,
      behavior: "smooth"
    });
  };

export const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };