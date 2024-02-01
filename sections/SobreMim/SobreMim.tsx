import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  text: HTMLWidget;
  containerWidth?: number;
}

const DEFAULT_TEXT = `<h2 class="home-title">QUEM SOU EU</h2>
  <p class="home-content">
  <b>Minha relação com a Medicina começou cedo.</b> 
  Quando criança, ao ser questionada sobre o que 
  seria na vida adulta não hesitava ao responder: "Médica". 
  Essa paixão fez com que eu conquistasse meu diploma 
  aos 22 anos, em minha cidade natal, Campo Grande, 
  Mato Grosso do Sul. Mas minha jornada estava apenas 
  começando.
  
  Determinada em me aprofundar nessa área que é uma 
  das mais complexas e multifacetadas da Medicina, a 
  Dermatologia, decidi me mudar para São Paulo, o 
  epicentro da inovação médica no Brasil, onde me dediquei
  intensamente à minha especialização.
  </p>
  <a href="#" class="home-button">Me conheça mais</a>`;

export default function RichText(
  { text = DEFAULT_TEXT, containerWidth }: Props,
) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      style={{
        maxWidth: containerWidth ? containerWidth : 1280,
        margin: "50px auto",
      }}
      class="flex container flex-col sobre-mim w-[44%]"
      id="quem-sou-eu"
    >
    </div>
  );
}
