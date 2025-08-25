'use client';

import { useState, useMemo } from 'react';
import { allProjects } from 'contentlayer/generated';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Grid } from '@/components/ui/grid';
import { ExternalLink, Github, Search, Filter, Calendar, Folder } from 'lucide-react';

export function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');

  // Get published projects sorted by date
  const publishedProjects = useMemo(() => {
    return allProjects
      .filter(project => project.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Extract unique categories and technologies
  const categories = useMemo(() => {
    const cats = [...new Set(publishedProjects.map(project => project.category))];
    return ['all', ...cats.sort()];
  }, [publishedProjects]);

  const technologies = useMemo(() => {
    const techs = [...new Set(publishedProjects.flatMap(project => project.technologies))];
    return ['all', ...techs.sort()];
  }, [publishedProjects]);

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return publishedProjects.filter(project => {
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      const matchesTechnology = selectedTechnology === 'all' || 
        project.technologies.includes(selectedTechnology);

      return matchesSearch && matchesCategory && matchesTechnology;
    });
  }, [publishedProjects, searchQuery, selectedCategory, selectedTechnology]);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planning':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      {/* Header */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A collection of projects I&apos;ve worked on, from web applications to AI experiments
            </p>
            
            <div className="grid gap-4 md:grid-cols-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{publishedProjects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{categories.length - 1}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{technologies.length - 1}</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{featuredProjects.length}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Filters */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Filter Projects</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technology Filter */}
              <div>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>
                      {tech === 'all' ? 'All Technologies' : tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery || selectedCategory !== 'all' || selectedTechnology !== 'all') && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <Badge variant="outline" className="gap-1">
                    Search: {searchQuery}
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-1 text-xs hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="gap-1">
                    Category: {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="ml-1 text-xs hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedTechnology !== 'all' && (
                  <Badge variant="outline" className="gap-1">
                    Tech: {selectedTechnology}
                    <button 
                      onClick={() => setSelectedTechnology('all')}
                      className="ml-1 text-xs hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedTechnology('all');
                  }}
                  className="h-6 px-2 text-xs"
                >
                  Clear All
                </Button>
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {publishedProjects.length} projects
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Featured Projects
                </h2>
              </div>
              
              <Grid cols={1} responsive={{ lg: 2 }} gap="lg">
                {featuredProjects.map((project) => (
                  <Card key={project.slug} className="hover-lift h-full flex flex-col">
                    {project.image && (
                      <div className="aspect-video w-full bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(project.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Folder className="h-3 w-3" />
                              {project.category}
                            </div>
                            <Badge variant={getStatusColor(project.status)} className="text-xs">
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.longDescription || project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="gap-2">
                      <Button asChild className="flex-1">
                        <a href={`/projects/${project.slug}`}>
                          View Details
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </Grid>
            </div>
          </Container>
        </Section>
      )}

      {/* Regular Projects */}
      {regularProjects.length > 0 && (
        <Section background={featuredProjects.length > 0 ? 'muted' : 'default'}>
          <Container>
            <div className="max-w-6xl mx-auto">
              {featuredProjects.length > 0 && (
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                    All Projects
                  </h2>
                </div>
              )}
              
              <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
                {regularProjects.map((project) => (
                  <Card key={project.slug} className="hover-lift h-full flex flex-col">
                    {project.image && (
                      <div className="aspect-video w-full bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(project.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Folder className="h-3 w-3" />
                          {project.category}
                        </div>
                        <Badge variant={getStatusColor(project.status)} className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="space-y-3">
                        <div>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <a href={`/projects/${project.slug}`}>
                          Details
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </Grid>
            </div>
          </Container>
        </Section>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or clearing the filters.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTechnology('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}