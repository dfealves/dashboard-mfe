import { Component, OnInit } from '@angular/core';

import { assetUrl } from '../../../../asset-url';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  logoMenu = assetUrl("icon-atlaware-logo.svg");
  iconHome = assetUrl("icon-home.svg");
  iconRegister = assetUrl("icon-register.svg");
  iconUsers = assetUrl("icon-users.svg")


  constructor() { }

  applyIconImage(icon) {
    return {
      'mask': `url(${icon})`,
      '-webkit-mask': `url(${icon})`,
    }
  }

  ngOnInit(): void {
  }

}
