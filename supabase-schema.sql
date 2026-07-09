create table if not exists public.events (
  id text primary key,
  title text not null,
  body text not null,
  status text not null default 'progress',
  image_url text,
  image_ratio text,
  detail_images jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.events enable row level security;

drop policy if exists "Anyone can read events" on public.events;
create policy "Anyone can read events"
on public.events
for select
to anon
using (true);
