import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: 'home/dashboard', icon: 'analytics' },
    { title: 'Scholars', url: 'home/scholars', icon: 'people' },
    { title: 'Calendar', url: 'home/calendar', icon: 'calendar' },
    { title: 'Cashouts', url: 'home/cashouts', icon: 'cash' },
    { title: 'Feedback', url: 'home/feedback', icon: 'happy' },
  ];

  public appFooterPages = [
    { title: 'Logout', url: 'logout', icon: 'log-out' },
  ];

  currentPage: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = this.appPages[0];
  }

  isCurrent(p: any) {
    return this.currentPage.title === p.title;
  }

  setCurrentPage(curr: any) {
    this.currentPage = curr;

    this.router.navigateByUrl(curr.url);
  }
}
