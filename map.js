// College Map Class
class CollegeMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.infoWindows = [];
        this.colleges = colleges; // Using the colleges array from main.js
        this.filteredColleges = [...this.colleges];
    }

    // Initialize the map
    init() {
        const mapContainer = document.getElementById('college-map');
        if (!mapContainer) return;

        // Center map on Kerala
        const kerala = { lat: 10.8505, lng: 76.2711 };
        
        // Create map instance
        this.map = new google.maps.Map(mapContainer, {
            zoom: 8,
            center: kerala,
            styles: this.getMapStyles(),
            mapTypeControl: false,
            streetViewControl: false
        });

        // Add markers for all colleges
        this.addCollegeMarkers();

        // Initialize filters
        this.initializeFilters();
    }

    // Add markers for all colleges
    addCollegeMarkers() {
        this.clearMarkers();
        
        this.filteredColleges.forEach(college => {
            const marker = new google.maps.Marker({
                position: college.coordinates,
                map: this.map,
                title: college.name,
                icon: this.getMarkerIcon(college.rating)
            });

            const infoWindow = new google.maps.InfoWindow({
                content: this.createInfoWindowContent(college)
            });

            marker.addListener('click', () => {
                this.closeAllInfoWindows();
                infoWindow.open(this.map, marker);
            });

            this.markers.push(marker);
            this.infoWindows.push(infoWindow);
        });
    }

    // Create info window content
    createInfoWindowContent(college) {
        return `
            <div class="map-info-window">
                <h4>${college.name}</h4>
                <div class="info-window-content">
                    <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                    <p><i class="fas fa-star"></i> Rating: ${college.rating}/5</p>
                    <p><i class="fas fa-graduation-cap"></i> Placement: ${college.placement}</p>
                    <p><i class="fas fa-rupee-sign"></i> Fees: ₹${college.fees}</p>
                    <div class="courses">
                        <strong>Courses:</strong>
                        <ul>
                            ${college.courses.map(course => `<li>${course}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="viewCollegeDetails(${college.id})">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }

    // Initialize filters
    initializeFilters() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'map-filters';
        filterContainer.innerHTML = `
            <div class="filter-group">
                <label>Rating:</label>
                <select id="rating-filter">
                    <option value="all">All Ratings</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Course:</label>
                <select id="course-filter">
                    <option value="all">All Courses</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Civil">Civil</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Fees:</label>
                <select id="fees-filter">
                    <option value="all">All Fees</option>
                    <option value="50000">Below ₹50,000</option>
                    <option value="100000">Below ₹1,00,000</option>
                    <option value="200000">Below ₹2,00,000</option>
                </select>
            </div>
        `;

        document.getElementById('college-map').parentNode.insertBefore(
            filterContainer,
            document.getElementById('college-map')
        );

        // Add event listeners to filters
        this.addFilterEventListeners();
    }

    // Add event listeners to filters
    addFilterEventListeners() {
        const filters = ['rating-filter', 'course-filter', 'fees-filter'];
        filters.forEach(filterId => {
            document.getElementById(filterId).addEventListener('change', () => {
                this.applyFilters();
            });
        });
    }

    // Apply filters
    applyFilters() {
        const ratingFilter = document.getElementById('rating-filter').value;
        const courseFilter = document.getElementById('course-filter').value;
        const feesFilter = document.getElementById('fees-filter').value;

        this.filteredColleges = this.colleges.filter(college => {
            const meetsRating = ratingFilter === 'all' || college.rating >= parseFloat(ratingFilter);
            const meetsCourse = courseFilter === 'all' || college.courses.includes(courseFilter);
            const meetsFees = feesFilter === 'all' || parseFloat(college.fees) <= parseFloat(feesFilter);

            return meetsRating && meetsCourse && meetsFees;
        });

        this.addCollegeMarkers();
    }

    // Clear all markers
    clearMarkers() {
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];
        this.infoWindows = [];
    }

    // Close all info windows
    closeAllInfoWindows() {
        this.infoWindows.forEach(infoWindow => infoWindow.close());
    }

    // Get marker icon based on rating
    getMarkerIcon(rating) {
        const color = rating >= 4 ? 'green' : rating >= 3 ? 'yellow' : 'red';
        return {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 0.7,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 8
        };
    }

    // Get custom map styles
    getMapStyles() {
        return [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            }
        ];
    }
}

// Initialize the map when the page loads
let collegeMap;
document.addEventListener('DOMContentLoaded', function() {
    collegeMap = new CollegeMap();
    collegeMap.init();
}); 