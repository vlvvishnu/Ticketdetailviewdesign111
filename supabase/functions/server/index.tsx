import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

const TABLE_NAME = 'kv_store_89219a35'

const app = new Hono()

app.use('*', cors())
app.use('*', logger(console.log))

// Get ticket state
app.get('/make-server-89219a35/ticket/:ticketId', async (c) => {
  try {
    const ticketId = c.req.param('ticketId')
    const key = `ticket_${ticketId}`

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('value')
      .eq('key', key)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return c.json({ success: true, data: null })
      }
      throw error
    }

    const state = data?.value ? JSON.parse(data.value) : null
    return c.json({ success: true, data: state })
  } catch (error) {
    console.log(`Error fetching ticket ${c.req.param('ticketId')}: ${error}`)
    return c.json({ success: false, error: String(error) }, 500)
  }
})

// Save ticket state
app.post('/make-server-89219a35/ticket/:ticketId', async (c) => {
  try {
    const ticketId = c.req.param('ticketId')
    const body = await c.req.json()
    const key = `ticket_${ticketId}`

    const { error } = await supabase
      .from(TABLE_NAME)
      .upsert({ key, value: JSON.stringify(body) }, { onConflict: 'key' })

    if (error) throw error

    return c.json({ success: true })
  } catch (error) {
    console.log(`Error saving ticket ${c.req.param('ticketId')}: ${error}`)
    return c.json({ success: false, error: String(error) }, 500)
  }
})

// Reset ticket
app.delete('/make-server-89219a35/ticket/:ticketId', async (c) => {
  try {
    const ticketId = c.req.param('ticketId')
    const keys = [
      `ticket_${ticketId}`,
      `ticket-alerts-${ticketId}`,
      `alert-bucket-created-${ticketId}`
    ]

    const { error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .in('key', keys)

    if (error) throw error

    return c.json({ success: true })
  } catch (error) {
    console.log(`Error resetting ticket ${c.req.param('ticketId')}: ${error}`)
    return c.json({ success: false, error: String(error) }, 500)
  }
})

// Health check
app.get('/make-server-89219a35/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

Deno.serve(app.fetch)
