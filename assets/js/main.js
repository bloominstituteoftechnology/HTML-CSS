class Filter {
    constructor({element, parent}) {
        this.element = element;
        this.parent = parent;
        this.type = this.element.dataset.filter;
        this.element.addEventListener('click', (e) => {
            this.setFilter();
        });
    }
    setActive(isActive) {
        if(isActive) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }
    setFilter() {
        this.element.classList.add('active');
        this.parent.setFilter(this.type);
    }
}
class Project {
    constructor({element}) {
        this.element = element;
        this.type = this.element.dataset.type;        
    }
    setVisible(isVisible) {
        this.visible = isVisible;
        if(this.visible) {
            this.element.classList.remove('hide');
        } else {
            this.element.classList.add('hide');
        }
    }
}

class Portfolio {
    constructor({element, defaultFilter = "*"}) {
        this.element = element;
        this.projects = [];
        this.visibleProjects = [];
        this.filters = [];
        this.defaultFilter = defaultFilter;
        this.activeFilter = this.defaultFilter;        
    }
    buildFilters() {
        const filters = this.element.querySelectorAll('.filters button[data-filter]');
        this.filters = Array.prototype.map.call(filters, (element) => {
           return new Filter({element, parent:this});
        });
    }
    buildProjects() {
        const projects = this.element.querySelectorAll('ul li');
        this.projects = Array.prototype.map.call(projects, (element) => {
            return new Project({element});
        })
    }
    setFilter(type) {
        this.activeFilter = type;
        this.filters.map((filter) => {
            if(filter.type === this.activeFilter) {
                filter.setActive(true);
            } else {
                filter.setActive(false);
            }
        });
        this.visibleProjects = this.projects.filter((project) => {
            if(project.type === this.activeFilter || type === '*') {
                project.setVisible(true); 
                return true;
            }
            project.setVisible(false);
            return false;
        });
    }
    init() {
        this.buildProjects();        
        this.buildFilters();
        this.setFilter(this.activeFilter);
    }
} 



const projectsElement = document.querySelector('.projects');
const portfolio = new Portfolio({
    element: projectsElement
})
portfolio.init();