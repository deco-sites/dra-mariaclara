import type { HTMLWidget } from "apps/admin/widgets.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";


export interface Logo {
    src?: ImageWidget;
}

export interface Props {
    text: HTMLWidget;
    containerWidth?: number;
    image?: Logo; 
}

const imageContent = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7"
}

const DEFAULT_TEXT =
  `MEU ATENDIMENTO
  Você merece se sentir confiante, feliz e radiante em 
  sua própria pele. E eu estou aqui para guiá-la nessa jornada 
  de descoberta e cuidado, onde a beleza e o bem-estar se 
  encontram.
  
  Acredito que a beleza vai além da superfície - ela está 
  profundamente ligada ao seu bem-estar emocional e 
  mental. 
  
  Entendo que cada paciente é única, com necessidades e 
  objetivos individuais. Não se trata apenas de resolver queixas 
  relacionadas à pele, cabelos e unhas, mas de elevar a 
  autoestima e melhorar a qualidade de vida. 
  
  Nós sabemos o quanto a autoestima impacta em nossas 
  atitudes e até mesmo nas relações interpessoais e é por 
  isso que não se trata apenas de estética.`;

export default function RichText(
  { text = DEFAULT_TEXT, containerWidth, image = imageContent }: Props,
) {
  return (
    <div>
        <Picture>
            <Source
            media="(max-width: 767px)"
            src={image}
            width={430}
            height={590}
            />
            <img
            class="object-cover w-full h-full"
            src={image}
            />
        </Picture>
        <div
        dangerouslySetInnerHTML={{ __html: text }}
        style={{
            maxWidth: containerWidth ? containerWidth : 1280,
            margin: "50px auto",
        }}
        class="flex container flex-col sobre-mim w-[44%]"
        >
        </div>
    </div>
  );
}
