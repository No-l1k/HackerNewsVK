import { SplitCol, SplitLayout } from '@vkontakte/vkui';
import { HomePage } from '../../pages/HomePage';
import NewsPage from '../../pages/NewsPage/ui/Page';
import { View } from '@vkontakte/vkui';
import { DEFAULT_VIEW_PANELS } from '../routes/routes';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

export const AppLayout = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <SplitLayout >
      <SplitCol>
        <View activePanel={activePanel}>
          <HomePage id ="home"/>
          <NewsPage id="news" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
