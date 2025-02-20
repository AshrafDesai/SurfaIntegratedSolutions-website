import { createClient } from '@supabase/supabase-js';

// These are your public keys - it's safe to keep them in the client
const supabaseUrl = 'https://frrdfgdslfjaiiyswzct.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycmRmZ2RzbGZqYWlpeXN3emN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMjcxNTYsImV4cCI6MjA1NTYwMzE1Nn0.Y3H2iq0CWMI0sLgsJFtG-0KYcEw_75D0Uqc9Vrud3yQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
