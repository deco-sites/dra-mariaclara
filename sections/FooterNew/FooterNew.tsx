import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
    textFooter?: HTMLWidget
}

const DEFAULT_PROPS = 'Created with much love by <a href="https://www.websense.consulting/" target="_blank">WebSense Consulting™</a>'

export default function FooterNew( {textFooter = DEFAULT_PROPS} : Props) {

    

    return (
        <div class=" bg-gradient-to-r from-[#EAEBE6] to-[#DACABE] py-[10px]"
            dangerouslySetInnerHTML={{ __html: textFooter }}
        >
        </div>
    )
}