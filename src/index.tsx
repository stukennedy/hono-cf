import { Hono } from 'hono';
import { layout } from '~/honox';

import { RootLayout } from '~/layouts/RootLayout';
import { DashLayout } from '~/layouts/DashLayout';

import * as index from '~/routes';
import * as dash from '~/routes/dash';

const app = new Hono();

app.use('*', layout(RootLayout, true));

app.get('/', index.onRequestGet);
app.post('/', index.onRequestPost);

app.use('/dash/*', layout(DashLayout));
app.get('/dash', dash.onRequestGet);
app.post('/dash', dash.onRequestPost);

export default app;
