import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  objeto_feed = {
    titulo:"Jameson Souza",
    data: "November 5, 1955",
    descricao: "Criand app com ionic primeiro",
    qntd_likes:12,
    qntd_comments: 30,
    time_comments: "11h ago"
    
  }


  public nomeUsuario:string = "Jameson Souza";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
