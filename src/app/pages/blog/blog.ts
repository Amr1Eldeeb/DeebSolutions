import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {}
