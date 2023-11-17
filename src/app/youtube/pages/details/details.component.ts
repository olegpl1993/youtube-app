import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from 'src/shared/models/search-result.model';
import ApiService from 'src/app/core/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent {
  public id = '';
  public searchItem: SearchItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.apiService.getMovieData(this.id).subscribe((data) => {
      this.searchItem = data?.items[0] || null;
    });
  }
}
