import { Controller } from '@hotwired/stimulus'

export default class Test extends Controller<HTMLFormElement> {
  public connect(): void {
    console.log('connect', this.element)
  }
}
