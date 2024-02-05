import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannerMain {
  srcDesktop?: ImageWidget;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title?: string;
  bannerMain?: BannerMain[];
  /**
   * @description Principal text
   */
  h1?: string;
  /**
   * @description Second text
   */
  textBanner?: string;
  /**
   * @description Text Button
   */
  button?: string;
  /**
   * @description Link Banner
   */
  linkButtonBanner?: string;
}

const DEFAULT_PROPS: Props = {
  title: "Summer bags",
  bannerMain: [
    {
      alt: "a",
      href: "a",
      srcDesktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    },
    {
      alt: "a",
      href: "a",
      srcDesktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3e2b7824-d75c-4704-8d32-621bfc9b20cf",
    },
  ],
  h1: "Sua jornada para uma pele incrível e confiança renovada começa aqui",
  textBanner: "Explore a sua própria beleza através de cuidados personalizados",
  button: "Quero agendar minha consulta!",
  linkButtonBanner: "/",
};

export default function bannerMain(props: Props) {
  const {
    title,
    banners = [],
    h1,
    textBanner,
    button,
    linkButtonBanner,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <section class="flex items-start justify-around w-[80%] mx-auto max-[1440px] xl:mb-[110px] 2xl:mb-[145px] bg-[#353535]">
      <div class="w-[40%] mt-[10%]">
        <h1 class="font-display font-[900] text-[45px] leading-[50px] text-[#EAEBE6] block mb-[10px]">
          {h1}
        </h1>
        <p class="font-body text-[30px] font-[300] leading-[40px] text-[#EAEBE6] block mb-[10px]">
          {textBanner}
        </p>
        <a
          href={linkButtonBanner}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#D5C9BD] w-[65%] text-[#1E1A1A] px-[15px] py-[15px] mt-[10px] block text-center font-body text-[15px] font-[400]"
        >
          {button}
        </a>
      </div>
      <div class="w-[60%] relative">
        <Picture class="">
          <Source
            src={banners[0].srcDesktop}
            height={500}
          />
          <img
            class="w-[145%] absolute top-[-100px] right-[-150px] block max-w-[1003px]"
            src={banners[0].srcDesktop}
            alt={banners[0].alt}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      </div>
    </section>
  );
}
