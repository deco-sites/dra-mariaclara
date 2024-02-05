export interface Props {
    textFooter?: string
}

const DEFAULT_PROPS = {
    textFooter: "Created with much love by WebSense™"
}

export default function FooterNew(props: Props) {

    const { textFooter } = { ...DEFAULT_PROPS, ...props }

    return (
        <div class=" bg-gradient-to-r from-[#EAEBE6] to-[#DACABE] py-[10px] mt-[20px]">
            <p class="flex justify-center text-[#353535] text-[13px]">{textFooter}</p>
        </div>
    )
}