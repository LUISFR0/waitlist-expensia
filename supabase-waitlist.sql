-- Correr esto en Supabase SQL Editor antes de desplegar
-- https://supabase.com/dashboard/project/oxefxfwwwrdypjnbnzdy/sql

CREATE TABLE IF NOT EXISTS public.waitlist (
  id         BIGSERIAL PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  name       TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Solo el backend (service_role) puede insertar — el frontend nunca toca esta tabla directamente
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Sin políticas públicas = solo service_role tiene acceso
