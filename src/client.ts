import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kkbvhvrybnnedhvtrggq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrYnZodnJ5Ym5uZWRodnRyZ2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTA4MzcsImV4cCI6MjA0NTAyNjgzN30.xn75EmLAqHrqE0u_ojyeEKGo_FBZ7HamOBc8UkcR_zU';
export const supabase = createClient(supabaseUrl, supabaseKey);
