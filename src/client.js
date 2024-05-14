import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nrxlinkewxiebsciiwdc.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGxpbmtld3hpZWJzY2lpd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTgyMDgsImV4cCI6MjAzMDkzNDIwOH0.wkh3k1xkYp6VcwtoyFJ7qa7sS9v3SZGSsJyILVMAFM0';
export const supabase = createClient(supabaseUrl, supabaseKey);
