import type { HTMLWidget } from "apps/admin/widgets.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface BannerMainAtendimento {
  srcDesktop?: ImageWidget;
}

export interface Props {
  /**
     * @description Texto principal
  */
  textMain: HTMLWidget;
  /**
     * @description Tamanho do container - 1280px
  */
  containerWidth?: number;
  /**
     * @description Imagem do procedimento
  */
  imagem?: BannerMainAtendimento;
  /**
     * @description Texto Benefícios
  */
  textBenefits?: HTMLWidget;
  /**
     * @description Texto aplicação
  */
  textApplication?: HTMLWidget;
  /**
     * @description Texto cuidados
  */
  textCare?: HTMLWidget;
  /**
   * @description Texto Tempo dos resultados
  */
  textTime?: HTMLWidget;
  /**
    * @description Texto Indicações
  */
  textIndicacao?: HTMLWidget;
  /**
     * @description Texto Contra indicações
  */
   textNaoIndicado?: HTMLWidget;
}

const DEFAULT_PROPS: Props = {
  textMain: `<h1>Botox</h1>
    <br/>
    <p>
        Toxina botulínica (botox) é indicada 
        para tratar rugas dinâmicas, aquelas 
        causadas pelos movimentos faciais 
        repetitivos, como sorrir, franzir a testa, 
        levantar as sobrancelhas, entre outros.
        <br/>
        Além de seus efeitos estéticos, a toxina 
        botulínica oferece benefícios adicionais, 
        como a prevenção da formação de novas 
        rugas (Botox Preventivo) e a promoção de 
        uma pele mais saudável e radiante 
        (Skin Quality). 
    </p>`
};

export default function RichText(props: Props) {
  const {
    textMain = '',
    imagem = {},
    containerWidth,
    textBenefits = '',
    textApplication = '',
    textCare = '',
    textTime = '',
    textIndicacao = '',
    textNaoIndicado = ''
  } = { ...DEFAULT_PROPS, ...props };
  return (
    <div class="flex items-center post-page flex-col">
      {(imagem.srcDesktop)
        ?
          <div class="container flex items-center py-[40px] max-[1020px]:flex-col max-[1020px]:pt-[0]">
            <Picture class="">
              <Source
                src={imagem.srcDesktop}
                height={600}
                width={404}
              />
              <img
                class="max-[1020px]:w-full"
                src={imagem.srcDesktop}
                decoding="async"
                loading="lazy"
              />
            </Picture>
            <div
              dangerouslySetInnerHTML={{ __html: textMain }}
              style={{
                maxWidth: containerWidth ? containerWidth : 1280,
                margin: "50px auto",
              }}
              class="flex flex-col post-page w-[55%] text-[#EAEBE6] max-[1020px]:w-[90%]"
            >
            </div>
          </div>
        :
        <div
          dangerouslySetInnerHTML={{ __html: textMain }}
          style={{
            maxWidth: containerWidth ? containerWidth : 1280,
            margin: "50px auto",
          }}
          class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
        >
        </div> 
      }
      {
        (textBenefits) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textBenefits }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
      {
        (textApplication) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textApplication }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
      {
        (textCare) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textCare }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
      {
        (textTime) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textTime }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
      {
        (textIndicacao) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textIndicacao }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
      {
        (textNaoIndicado) 
          ?
          <div
            dangerouslySetInnerHTML={{ __html: textNaoIndicado }}
            style={{
              maxWidth: containerWidth ? containerWidth : 1280,
              margin: "30px auto",
            }}
            class="flex flex-col post-page w-[100%] text-[#EAEBE6] max-[1020px]:w-[90%]"
          >
          </div>
          :
          ''
      }
    </div>
  );
}
