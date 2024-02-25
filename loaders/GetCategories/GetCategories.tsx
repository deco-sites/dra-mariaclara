import type { SectionProps } from "deco/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient('https://pihhfzwogbyngiejzngp.supabase.co/rest/v1/procedimentos?select=*', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaGhmendvZ2J5bmdpZWp6bmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNTk5NzcsImV4cCI6MjAyMzgzNTk3N30.hTByecSa5FBay6_lTKFmUt4h4ajWFnCvt53lRUQPmIs')

// Props type that will be configured in deco.cx's Admin
export interface Props {
  procedimentos: Procedimento;
}

// Define a interface para os dados retornados da API
export interface Procedimento {
  id?: string;
  title?: string;
  short_description?: string;
  conteudo?: string;
  image_url?: string;
}

const loaderProcedimentos = async ( props: Props ) => {
  try {
    const response = await supabase
      .from('procedimentos')
      .select('title, image_url')
     console.log('response', response)
     const { data, error } = response;
     console.log('data', data)
  } catch (e) {
    console.log(e)
    return null
  }
  
}

export default loaderProcedimentos