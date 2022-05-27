import { createAction, props } from '@ngrx/store';
import { IngressEgress } from 'src/app/models/ingress-egress.model';

export const setItems = createAction(
    '[IngressEgress Component] setItems',
    props<{ items: IngressEgress[] }>()
);
export const unsetItems = createAction('[IngressEgress Component] unsetItems');
