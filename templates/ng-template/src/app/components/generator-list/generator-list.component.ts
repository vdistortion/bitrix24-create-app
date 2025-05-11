import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { mdiHelpCircleOutline } from '@mdi/js';
import { BitrixService } from '../../services/bitrix.service';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../link/link.component';
import { IconComponent } from '../../ui/icon/icon.component';
import { environment } from '../../../environments/environment';
import { RootStoreService } from '../../services/root-store.service';

type EntityType = {
  id: 'task' | 'deal' | 'company' | 'contact' | 'lead';
  method: string;
  userId: string;
  title: string;
  scope: string;
  link: string;
  count: number;
  buttonName: string;
  name: string;
  help?: string;
};

@Component({
  selector: 'app-generator-list',
  imports: [FormsModule, LinkComponent, IconComponent],
  templateUrl: './generator-list.component.html',
  styleUrl: './generator-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorListComponent {
  private cdr = inject(ChangeDetectorRef);
  private bitrixService = inject(BitrixService);
  protected store = inject(RootStoreService);
  mdiHelpCircleOutline = mdiHelpCircleOutline;
  placeholder = environment.APP_NAME;
  disabledButton = false;
  defaultCount = 10;
  entities: EntityType[] = [
    {
      id: 'task',
      method: 'tasks.task.add',
      userId: 'RESPONSIBLE_ID',
      title: 'TITLE',
      scope: 'task',
      link: `/company/personal/user/${this.store.currentId}/tasks/`,
      count: this.defaultCount,
      buttonName: 'Задачи',
      name: 'Задача',
    },
    {
      id: 'deal',
      method: 'crm.deal.add',
      userId: 'ASSIGNED_BY_ID',
      title: 'TITLE',
      scope: 'crm',
      link: '/crm/deal/list/',
      count: this.defaultCount,
      buttonName: 'Сделки',
      name: 'Сделка',
    },
    {
      id: 'company',
      method: 'crm.company.add',
      userId: 'ASSIGNED_BY_ID',
      title: 'TITLE',
      scope: 'crm',
      link: '/crm/company/list/',
      count: this.defaultCount,
      buttonName: 'Компании',
      name: 'Компания',
    },
    {
      id: 'contact',
      method: 'crm.contact.add',
      userId: 'ASSIGNED_BY_ID',
      title: 'NAME',
      scope: 'crm',
      link: '/crm/contact/list/',
      count: this.defaultCount,
      buttonName: 'Контакты',
      name: 'Контакт',
    },
    {
      id: 'lead',
      method: 'crm.lead.add',
      userId: 'ASSIGNED_BY_ID',
      title: 'TITLE',
      scope: 'crm',
      link: '/crm/lead/list/',
      count: this.defaultCount,
      buttonName: 'Лиды',
      name: 'Лид',
      help: 'Если лиды не включены, они создадутся в сделках',
    },
  ];

  add(entity: EntityType) {
    this.disabledButton = true;
    const count = Number(entity.count);
    const params = [];

    for (let i = 0; i < count; i++) {
      params.push({
        method: entity.method,
        params: {
          fields: {
            [entity.title]: `${entity.name} #${i + 1} (${this.placeholder})`,
            [entity.userId]: this.store.currentId,
          },
        },
      });
    }

    this.bitrixService.batch.addEntities(params).finally(() => {
      this.disabledButton = false;
      this.cdr.markForCheck();
    });
  }
}
