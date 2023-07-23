import { EntityCategory } from "src/app/entity/entityCategory";
import baserUrl from "../helper";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CusCategoryService {
  entityArray: EntityCategory[] = []; // Aquí se creará el array con los datos de la API
  public dataLoaded: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  public loadData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<EntityCategory[]>(`${baserUrl}/api/category/list`).subscribe(
        (data) => {
          this.entityArray = data;
          this.dataLoaded = true;
        
          resolve();
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }

  getOneCategory(_id: number) {
    return this.entityArray.find(x => x.id === _id);
  }
}
