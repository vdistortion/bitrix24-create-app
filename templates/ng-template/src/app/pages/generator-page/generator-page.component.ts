import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mdiHelpCircleOutline } from '@mdi/js';
import { BitrixService } from '../../services/bitrix.service';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../../components/link/link.component';
import { IconComponent } from '../../ui/icon/icon.component';

type EntityNameType = 'task' | 'deal' | 'company' | 'contact' | 'lead';
type EntityType = {
  id: EntityNameType;
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
  selector: 'app-generator-page',
  imports: [FormsModule, LinkComponent, IconComponent],
  templateUrl: './generator-page.component.html',
  styleUrl: './generator-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorPageComponent {
  mdiHelpCircleOutline = mdiHelpCircleOutline;
  placeholder = 'bitrix24-create-app';
  defaultCount = 10;
  userId = 1;
  entities: EntityType[] = [
    {
      id: 'task',
      method: 'tasks.task.add',
      userId: 'RESPONSIBLE_ID',
      title: 'TITLE',
      scope: 'task',
      link: `/company/personal/user/${this.userId}/tasks/`,
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

  constructor(private bitrixService: BitrixService) {}

  add(entity: EntityType) {
    const count = Number(entity.count);
    const params = [];
    const title = (number: number) =>
      `${entity.name} #${number} (${this.placeholder})`;

    for (let i = 0; i < count; i++) {
      params.push({
        method: entity.method,
        params: {
          fields: {
            [entity.title]: title(i + 1),
            [entity.userId]: this.userId,
          },
        },
      });
    }

    this.bitrixService.batch
      .addEntities(params)
      .then((entities: any) => {
        console.log(entities);
      })
      .catch((entities: any) => {
        console.log(entities);
      });
  }
}
