import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('visits')
      .select('*')
      .limit(1)
    
    console.log('Supabase test:', { data, error })
  } catch (e) {
    console.error('Supabase error:', e)
  }
}

testConnection()