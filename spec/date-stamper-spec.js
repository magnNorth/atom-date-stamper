'use babel';

import DateStamper from '../lib/date-stamper';

describe('DateStamper', () => {
  let workspaceElement,
    activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('date-stamper');
  });

  describe('when the date-stamper:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      expect(workspaceElement.querySelector('.date-stamper')).not.toExist();
      atom.commands.dispatch(workspaceElement, 'date-stamper:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(DateStamper.dateStamperView).toBe(null);
      });
    });

    it('hides and shows the view', () => {
      jasmine.attachToDOM(workspaceElement);
      expect(workspaceElement.querySelector('.date-stamper')).not.toExist();
      atom.commands.dispatch(workspaceElement, 'date-stamper:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });
    });
  });
  /* --- end toggle --- */

  describe('all methods needed are there', () => {
    it('make it all work', () => {
      var currentDate = new Date();
      runs(() => {
        var methodsUsed = [
          DateStamper.toggle,
          DateStamper.addDate,
          DateStamper.addDateTime,
          DateStamper.addTime,
          DateStamper.addUnix
        ];

        methodsUsed.map(() => (method) => {
          expect(typeof method).toBe("function");
        });
      });
    });
  });


});
