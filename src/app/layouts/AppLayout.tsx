import { SplitCol, SplitLayout } from '@vkontakte/vkui';
import { HomePage } from '../../pages/HomePage';

export const AppLayout = () => {
  return (
    <SplitLayout >
      <SplitCol>
        <HomePage />
      </SplitCol>
    </SplitLayout>
  );
};
