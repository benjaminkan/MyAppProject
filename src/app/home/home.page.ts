import { Component } from "@angular/core";
import { Platform, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public actionsheetController: ActionSheetController) {}

  async openMenu() {
    const actionSheet = await this.actionsheetController.create({
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },

        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },

        {
          text: "Play",
          icon: "caret-forward-outline",
          handler: () => {
            console.log("Play clicked");
          }
        },

        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },

        {
          text: "Cancel",
          role: "cancel",
          icon: "close",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });

    actionSheet.present();
  }
}
