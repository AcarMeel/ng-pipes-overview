import { Component } from '@angular/core';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent {
  public name = 'Melissa';
  public genre = 'female';
  public invitationMapping = {
    'female': 'invitarla',
    'male': 'invitarlo'
  };
  public nameMale = 'Chris';
  public genreMale = 'male';
  public invitationMappingMale = {
    'female': 'woman',
    'male': 'man'
  };

  public puppies = [];
  public puppiesMapping = {
    '=0': 'no puppies so far',
    '=1': 'one puppy today',
    'other': 'many puppies today'
  };
}
