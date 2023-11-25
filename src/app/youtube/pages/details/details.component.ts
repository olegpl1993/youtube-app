import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from 'src/app/redux/state.models';
import ApiService from 'src/app/core/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent implements OnDestroy {
  public id = '';
  public searchItem: SearchItem | null = null;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        this.id = params['id'];
      })
    );

    this.subscriptions.push(
      this.apiService.getMovieData(this.id).subscribe((data) => {
        this.searchItem = data?.items[0] || null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
