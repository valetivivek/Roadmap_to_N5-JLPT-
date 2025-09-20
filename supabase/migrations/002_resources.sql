-- Create resources table
CREATE TABLE IF NOT EXISTS public.resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  kind TEXT CHECK (kind IN ('video','site','deck','doc')) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create task_resources mapping table
CREATE TABLE IF NOT EXISTS public.task_resources (
  task_id UUID REFERENCES public.tasks(id) ON DELETE CASCADE,
  resource_id UUID REFERENCES public.resources(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  PRIMARY KEY (task_id, resource_id)
);

-- Enable Row Level Security
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_resources ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Resources: Public read access
CREATE POLICY "public read resources" ON public.resources
  FOR SELECT USING (true);

-- Task resources: Public read access  
CREATE POLICY "public read task_resources" ON public.task_resources
  FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_task_resources_task_id ON public.task_resources(task_id);
CREATE INDEX IF NOT EXISTS idx_task_resources_resource_id ON public.task_resources(resource_id);
CREATE INDEX IF NOT EXISTS idx_resources_kind ON public.resources(kind);

-- Add updated_at trigger for resources
CREATE TRIGGER update_resources_updated_at BEFORE UPDATE ON public.resources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add updated_at trigger for task_resources
CREATE TRIGGER update_task_resources_updated_at BEFORE UPDATE ON public.task_resources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
