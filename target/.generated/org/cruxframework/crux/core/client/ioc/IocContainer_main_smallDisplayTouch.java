package org.cruxframework.crux.core.client.ioc;

import org.cruxframework.crux.core.client.screen.views.View;
import com.google.gwt.core.client.GWT;

public class IocContainer_main_smallDisplayTouch extends org.cruxframework.crux.core.client.ioc.IocContainer {
  public IocContainer_main_smallDisplayTouch(View view){
    super(view);
  }
  public  essogs.client.MainController.MainView getessogs_client_MainController_MainView(org.cruxframework.crux.core.client.ioc.IoCResource.Scope scope, String subscope){
    essogs.client.MainController.MainView result = _getScope(scope).getValue(new org.cruxframework.crux.core.client.ioc.IocProvider<essogs.client.MainController.MainView>(){
      public essogs.client.MainController.MainView get(){
        return GWT.create(essogs.client.MainController.MainView.class);
      }
    }, "essogs.client.MainController.MainView", subscope, 
    new IocScope.CreateCallback<essogs.client.MainController.MainView>(){
      public void onCreate(essogs.client.MainController.MainView newObject){
      }
    }
    );
    if (scope != org.cruxframework.crux.core.client.ioc.IoCResource.Scope.SINGLETON && result.getBoundCruxViewId() == null){
      result.bindCruxView(this.getBoundCruxViewId());
    }
    return result;
  }
}
