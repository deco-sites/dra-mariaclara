export type Item = {
  label: string;
  href: string;
};

export default function ExtraLinks({ content }: { content?: Item[] }) {
  return (
    <>
      {content && content?.length > 0 && (
        <div class="flex flex-col md:flex-row gap-5 lg:gap-10">
          {content.map((item) => (
            <a class="link text-sm text-[#383838]" href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
