import {Component, OnDestroy, OnInit} from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-maket',
  templateUrl: './maket.component.html',
  styleUrls: ['./maket.component.scss']
})
export class MaketComponent implements OnDestroy {


  MANY_ITEMS = 'MANY_ITEMS';
  public components = ['box-icon', 'box-text', '1', '2'];
  public phone = [];

  subs = new Subscription();

  public constructor(private dragulaService:DragulaService) {

    dragulaService.createGroup('MANY_ITEMS', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (item) => {
        if(item === 'box-icon'){
          return String('box-icon')
        }
        if(item === 'box-text'){
          return String('box-text')
        }

      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });



    this.subs.add(dragulaService.dropModel(this.MANY_ITEMS)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        console.log('dropModel:');
        console.log(el);
        console.log(source);
        console.log(target);
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);
      })
    );
    this.subs.add(dragulaService.removeModel(this.MANY_ITEMS)
      .subscribe(({ el, source, item, sourceModel }) => {
        console.log('removeModel:');
        console.log(el);
        console.log(source);
        console.log(sourceModel);
        console.log(item);
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
