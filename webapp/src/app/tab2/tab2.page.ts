import { Component, Inject } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { UserPhoto, PhotoService } from "../services/photo.service";
import { DOCUMENT } from "@angular/common";
import * as mi from "@magenta/image";

const model = new mi.ArbitraryStyleTransferNetwork();

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(
    @Inject(DOCUMENT) document: Document,
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) {}
  loading : boolean[] = [];
  current_style: number = 0;
  styles = [
    {
      src: "assets/styles/picasso.jpg",
      title: "Picasso",
      subtitle: "The Weeping Woman",
    },
    {
      src : "assets/styles/monet.webp",
      title:"Monet",
      subtitle : "Self-portrait in his Atelier"
    },
    {
      src : "assets/styles/matisse.jpeg",
      title:"Matisse",
      subtitle : "La Raie Verte"
    },
    {
      src : "assets/styles/vangogh.webp",
      title:"Vincent van Gogh",
      subtitle : "Autoportrait au chapeau de feutre"
    }
  ];

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.refreshAll();
  }

  async refreshAll(){
    this.photoService.photos.forEach(async (_, idx) => {
      this.loading.push(true);
      await this.addImageSyle(idx);
    });
  }

  async addImageSyle(idx: number) {
    await model.initialize();
    let style = document.getElementById("img_style") as HTMLImageElement;
    let photo = document.getElementById("img_" + idx) as HTMLImageElement;
    let canvas = document.getElementById(
      "stylized_" + idx
    ) as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    await mi.tf.nextFrame();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    await mi.tf.nextFrame();
    let imageData = await model.stylize(photo, style);
    this.loading[idx]=false;
    canvas.width = photo.width;
    canvas.height = photo.height;
    ctx.putImageData(imageData, 0, 0);
  }

  async addNew() {
    await this.photoService.addNewToGallery();
    await this.photoService.loadSaved();
    this.loading.push(true);
    this.refreshAll();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: "Photos",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
