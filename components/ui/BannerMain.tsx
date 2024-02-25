import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannerMain {
  srcDesktop?: ImageWidget;
}

export interface Props {
  bannerNew: BannerMain
  /**
   * @description Principal text
   */
  h1: string;
  /**
   * @description Second text
   */
  textBanner: string;
  /**
   * @description Text Button
   */
  button: string;
  /**
   * @description Link Banner
   */
  linkButtonBanner: string;
}

const DEFAULT_PROPS: Props = {
  bannerNew: {srcDesktop: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e'}, 
  h1: "Sua jornada para uma pele incrível e confiança renovada começa aqui",
  textBanner: "Explore a sua própria beleza através de cuidados personalizados",
  button: "Quero agendar minha consulta!",
  linkButtonBanner: "/",
};

export default async function bannerNew(props: Props) {
  const {
    bannerNew = {},
    h1 = '',
    textBanner = '',
    button = '',
    linkButtonBanner = '',
  } = { ...DEFAULT_PROPS, ...props } as any;

  console.log('bannerNew', bannerNew)

  return (
    <section class="flex items-start justify-around w-[80%] mx-auto max-[1440px] xl:mb-[110px] 2xl:mb-[145px] bg-[#353535] max-[1020px]:flex-col max-[1020px]:mb-[15px] max-[1020px]:w-[95%] max-[1020px]:mx-auto">
      <div class="w-[40%] mt-[10%] max-[1020px]:w-[72%] max-[1020px]:mt-[0] max-[1020px]:z-[2]">
        <h1 class="font-display font-[900] text-[45px] leading-[50px] text-[#EAEBE6] block mb-[10px] max-[1020px]:text-[30px] max-[150px]:leading-[25px] max-[1020px]:mt-[0]">
          {h1}
        </h1>
        <p class="font-body text-[30px] font-[300] leading-[40px] text-[#EAEBE6] block mb-[10px] max-[1020px]:text-[20px]">
          {textBanner}
        </p>
        <a
          href={linkButtonBanner}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#D5C9BD] w-[65%] text-[#1E1A1A] px-[15px] py-[15px] mt-[10px] block text-center font-body text-[15px] font-[400] rounded-[8px] max-[1020px]:text-[13px]"
        >
          {button}
        </a>
      </div>
      <div class="w-[60%] relative max-[1020px]:z-1">
        {/* <Picture class="">
          <Source
            src={bannerMain[0].srcDesktop}
            height={500}
          />
          <img
            class="w-[135%] absolute top-[-80px] right-[-150px] block max-w-[1003px] 2xl:w-[125%] 2xl:top-[-100px] max-[1020px]:w-[100%] max-[1020px]:top-[-162px] max-[1020px]:right-[-158px]"
            src={bannerMain[0].srcDesktop}
            decoding="async"
            loading="lazy"
          />
        </Picture> */}
      </div>
    </section>
  );
}
