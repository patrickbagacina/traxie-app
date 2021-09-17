import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadRequestException } from '../apis/exceptions';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private managerSvc: ManagerService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async login() {
    try {
      console.log('>>>>LOGING IN')
      const res = await this.managerSvc.login('bagacina@gmail.com', 'test1234');

      if (res instanceof BadRequestException) {
        console.log('bad req');
      }

      console.log(res);
    } catch (err) {
      console.log(`Hey here`);
      console.log(err);
    }
  }

}
