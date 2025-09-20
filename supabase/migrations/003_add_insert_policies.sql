-- Add INSERT policies for roadmap tables to allow seeding
-- These policies allow anyone to insert roadmap data (for seeding purposes)

-- Allow anyone to insert roadmap weeks (for seeding)
CREATE POLICY "Anyone can insert roadmap weeks" ON roadmap_weeks
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert roadmap days (for seeding)
CREATE POLICY "Anyone can insert roadmap days" ON roadmap_days
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert tasks (for seeding)
CREATE POLICY "Anyone can insert tasks" ON tasks
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert resources (for seeding)
CREATE POLICY "Anyone can insert resources" ON public.resources
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert task_resources (for seeding)
CREATE POLICY "Anyone can insert task_resources" ON public.task_resources
  FOR INSERT WITH CHECK (true);
